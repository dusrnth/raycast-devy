import { Clipboard, Toast, showToast } from "@raycast/api";
import { v4 as uuidv4 } from "uuid";

export default function Command() {
  async function handleOpen() {
    const uuid = uuidv4();
    await Clipboard.copy(uuid);
    await showToast({
      style: Toast.Style.Success,
      title: "UUID Generated",
      message: "Copied to clipboard"
    });
  }

  handleOpen()
}