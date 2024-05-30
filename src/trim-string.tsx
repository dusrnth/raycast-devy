import { Action, ActionPanel, Form, showToast, Toast, Clipboard } from "@raycast/api";

interface Values {
  text: string;
  charsToRemove: string;
}

export default function Command() {
  async function handleSubmit(values: Values) {
    const { text, charsToRemove } = values;

    if (text.length === 0) {
      showToast({
        style: Toast.Style.Failure,
        title: "Empty Input",
        message: "Please enter some text to trim.",
      });
      return;
    }

    const trimmedText = text.trim();
    const filteredText = trimmedText.replace(new RegExp(`[${charsToRemove}]`, "g"), "");

    await Clipboard.copy(filteredText);

    showToast({
      style: Toast.Style.Success,
      title: "Text Trimmed",
      message: "The trimmed text has been copied to your clipboard.",
    });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextArea id="text" title="Text" placeholder="Enter text to trim" />
      <Form.TextField
        id="charsToRemove"
        title="Characters to Remove"
        placeholder="Enter characters to remove (e.g., ', &quot;)"
      />
    </Form>
  );
}
