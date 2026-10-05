"""Draws images/calibration-saved-table.svg for getting-started/calibration.md.

Data: Power Table saves and trust events from two ERG rides analyzed in
smartspin2k-tools/rides (metrics.json -> table.saves, table.trust_events).
  2026-09-29: saved table loaded at power-on (264 readings), ERG started 02:39.
  2026-10-01: table reset before the ride (2 readings), ERG started 09:05.
Times are minutes after the ERG workout started.
"""
import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt


def mins(clock, start):
    m, s = map(int, clock.split(":"))
    sm, ss = map(int, start.split(":"))
    return (m * 60 + s - sm * 60 - ss) / 60


SAVED = ("02:39", [("02:39", 264), ("05:50", 264), ("10:12", 266), ("15:31", 267), ("19:45", 271),
                   ("24:40", 283), ("28:49", 288), ("32:51", 290), ("37:13", 294), ("41:35", 302),
                   ("46:55", 308), ("51:19", 313), ("56:42", 315)], "03:15")
EMPTY = ("09:05", [("09:05", 2), ("11:30", 2), ("15:31", 27), ("19:32", 62), ("24:10", 87),
                   ("28:47", 105), ("32:55", 118), ("36:58", 130), ("41:13", 141), ("45:29", 151),
                   ("49:42", 166), ("53:48", 172), ("57:50", 176), ("62:10", 181)], "20:25")

TEXT, TEXT2, GRID = "#ffffff", "#c3c2b7", "#3a393f"
BLUE, ORANGE = "#3987e5", "#d95926"

plt.rcParams.update({"font.family": "sans-serif", "font.size": 12, "svg.fonttype": "none"})
fig, ax = plt.subplots(figsize=(8, 4.2))
fig.patch.set_alpha(0)
ax.set_facecolor("none")


def plot(ride, color, label):
    start, saves, trusted = ride
    xs = [mins(c, start) for c, _ in saves]
    ys = [r for _, r in saves]
    ax.plot(xs, ys, color=color, lw=2, solid_capstyle="round")
    tx = mins(trusted, start)
    ty = next(y0 + (y1 - y0) * (tx - x0) / (x1 - x0)
              for x0, y0, x1, y1 in zip(xs, ys, xs[1:], ys[1:]) if x0 <= tx <= x1)
    ax.plot(tx, ty, "o", ms=9, color=color, mec="#27262b", mew=2, zorder=3)
    ax.text(xs[-1] + 1, ys[-1], label, color=TEXT, va="center", fontsize=12)
    return tx, ty


tx, ty = plot(SAVED, BLUE, "Saved table")
ax.text(tx + 2, ty - 22, f"ERG trusts the table after {tx * 60:.0f} s", color=TEXT2, fontsize=11)
tx, ty = plot(EMPTY, ORANGE, "Empty table")
ax.text(tx + 2, ty - 22, f"ERG trusts the table after {tx:.0f} min", color=TEXT2, fontsize=11)

ax.set_xlim(0, 62)
ax.set_ylim(0, 340)
ax.set_xlabel("Minutes into the ERG workout", color=TEXT2)
ax.set_ylabel("Power Table readings", color=TEXT2)
ax.grid(axis="y", color=GRID, lw=1)
ax.tick_params(colors=TEXT2, length=0)
for side in ("top", "right", "left"):
    ax.spines[side].set_visible(False)
ax.spines["bottom"].set_color(TEXT2)
fig.subplots_adjust(left=0.1, right=0.84, top=0.96, bottom=0.14)
fig.savefig("images/calibration-saved-table.svg")
