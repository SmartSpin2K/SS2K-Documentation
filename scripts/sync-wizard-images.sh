#!/usr/bin/env sh
# Copy Guided Setup art from the companion app into images/wizard/.
# Usage: SS2K_APP_DIR=/c/git/ss2kconfigapp sh scripts/sync-wizard-images.sh
set -eu
APP="${SS2K_APP_DIR:-/c/git/ss2kconfigapp}/assets/images"
DEST="$(cd "$(dirname "$0")/.." && pwd)/images/wizard"
mkdir -p "$DEST"
for f in install_1.svg install_2.svg install_3.svg install_4.svg install_5.svg install_6.svg install_7.svg \
  sensor_wiring_tablet_back.svg sensor_wiring_harness_connecting.svg sensor_wiring_harness_connected.svg \
  side_switch_up.svg side_switch_down.svg side_switch_tablet_cable_connected.svg side_switch_tablet_cable_unused.svg \
  side_switch_tablet_clip_latched.svg side_switch_clip_latched.svg \
  wiring_harness_BLE.webp wiring_harness_pelotonOriginal.webp; do
  cp "$APP/$f" "$DEST/$f"
done
echo "Synced $(ls "$DEST" | wc -l) files to $DEST"
