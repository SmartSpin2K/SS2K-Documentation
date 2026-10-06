"""Draws images/calibration-erg-sim.svg for getting-started/calibration.md.

Data: ERG simulator traces (SmartSpin2k repo, scripts/erg_sim) for the Bowflex C6
profile, Random_Attacks.zwo at FTP 305 W, seed 27, first ride from an empty table,
calibrated (homed) and not calibrated (unhomed). Regenerate the traces with:

  python D:\\git\\smartspin2k-tools\\sim\\static_run.py matrix --profiles scripts/erg_sim/profiles/bowflex_c6.json
      scripts/erg_sim/profiles/peloton.json scripts/erg_sim/profiles/yesoul_gm1.json --seeds 27 28 29
      --starts profile --floors 0 --plot --output test/output/erg_guide/random_attacks

Run from this repo's root: python scripts/calibration-erg-chart.py [trace root]
"""
import csv
import sys
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt

ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else "D:/git/SmartSpin2k/test/output/erg_guide/random_attacks")
RUNS = {"homed": "Calibrated", "unhomed": "Not calibrated"}
# (title, time of the target change in seconds)
PANELS = [("Target up, 198 → 412 W", 3184), ("Target down, 412 → 232 W", 2135)]
BEFORE, AFTER = 10, 45

TEXT, TEXT2, GRID = "#ffffff", "#c3c2b7", "#3a393f"
COLORS = {"homed": "#3987e5", "unhomed": "#d95926"}


def load(mode):
    with open(ROOT / "bowflex_c6" / f"floor0-{mode}-profile-seed27" / "trace.csv") as f:
        return [(float(r["time_s"]), float(r["target_w"]), float(r["power_w"])) for r in csv.DictReader(f)]


traces = {mode: load(mode) for mode in RUNS}

plt.rcParams.update({"font.family": "sans-serif", "font.size": 12, "svg.fonttype": "none"})
fig, axes = plt.subplots(1, 2, figsize=(8, 4.2), sharey=True)
fig.patch.set_alpha(0)

for ax, (title, change) in zip(axes, PANELS):
    ax.set_facecolor("none")
    window = [(t - change, w, p) for t, w, p in traces["homed"] if -BEFORE <= t - change <= AFTER]
    ax.step([x[0] for x in window], [x[1] for x in window], where="post", color=TEXT2, lw=1.5, ls=(0, (4, 3)))
    for mode, label in RUNS.items():
        window = [(t - change, p) for t, _, p in traces[mode] if -BEFORE <= t - change <= AFTER]
        ax.plot([x[0] for x in window], [x[1] for x in window], color=COLORS[mode], lw=2, label=label)
    ax.set_title(title, color=TEXT, fontsize=12, loc="left")
    ax.set_xlim(-BEFORE, AFTER)
    ax.set_xlabel("Seconds after the change", color=TEXT2)
    ax.grid(axis="y", color=GRID, lw=1)
    ax.tick_params(colors=TEXT2, length=0)
    for side in ("top", "right", "left"):
        ax.spines[side].set_visible(False)
    ax.spines["bottom"].set_color(TEXT2)

axes[0].set_ylim(150, 520)
axes[0].set_ylabel("Watts", color=TEXT2)
handles, labels = axes[0].get_legend_handles_labels()
handles.append(plt.Line2D([], [], color=TEXT2, lw=1.5, ls=(0, (4, 3))))
labels.append("Target")
fig.legend(handles, labels, loc="lower center", ncol=3, frameon=False, labelcolor=TEXT)
fig.subplots_adjust(left=0.1, right=0.98, top=0.92, bottom=0.27, wspace=0.08)
fig.savefig("images/calibration-erg-sim.svg")
if len(sys.argv) > 2:  # optional dark PNG preview
    fig.patch.set_alpha(1)
    fig.patch.set_facecolor("#27262b")
    fig.savefig(sys.argv[2], dpi=90)
