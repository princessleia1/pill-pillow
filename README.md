# Pill-Pillow
**Pill-Pillow** is a Fitbit OS App for displaying your Medications and Dosage Information in a simple List Format allowing vertical scrolling for further tiles. This app uses [Fitbit OS SDK V4.1 - Firmware Release 70.7.14](https://github.com/Fitbit).

## Companion Settings
**Medications and Dosage Information** is input via the **Companion Settings** side app that is loaded via the Fitbit Mobile Application:
- **Add Item:** Click **Add Medication and Dosage** and input Medication Name and Dosage.
- **Save Item:** Click **Save** to add the tile to the Pill-Pillow Fitbit App on your device.
- **Delete Item:** Click **Edit** and select the **X** beside Item for removal. Click **Done** to delete it from device.
- **Delete All:** Click **Clear Settings Storage** to remove all Items in Companion Settings and on your device.

## Devices
**Pill-Pillow** is built for Fitbit Devices: Ionic (348x250), Versa (300x300), Versa Lite (300x300), and Versa 2 (300x300).

## Build
**Pre-requisites:**
* Install [Node.js](https://nodejs.org/en/download/) 8.x+ on macOS, Windows or Linux.
* ```git clone https://github.com/princessleia1/pill-pillow.git ```
* Edit package.json file and add the Fitbit CLI dependencies:
```
"devDependencies": {
   "@fitbit/sdk": "^4.1.0",
   "@fitbit/sdk-cli": "^1.7.0"
}
```
* Developer Bridge on Mobile Device and Fitbit Device connected.

## Install
Using Fitbit SDK CLI Tool via ```Console```:

```
npm add @fitbit/sdk
npm add @fitbit/sdk-cli
npx fitbit-build generate-appid
npx fitbit-build
npx fitbit
fitbit$ install
```
## License
**Pill-Pillow** App is licensed under the terms of the [GPL-3.0 License](/LICENSE). 
