import { Card } from "@blueprintjs/core"
import React from "react"
// import ChangeLog from "../../../../CHANGELOG.md"
import pkg from "../../../../package.json"
import { PluginEntryArea } from "./PluginEntryArea"

export class Help extends React.Component<any> {
  render() {
    return (
      <Card style={{ height: "100%" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1>Next Editor v{pkg.version}</h1>
          <p>Editor with Git</p>
          <p>
            This is pre alpha version. There is a possibility you lose data
            without notice by upgrade
          </p>
          <p>
            GitHub:&nbsp;
            <a href="https://github.com/mizchi/next-editor">
              mizchi/next-editor
            </a>
            <br />
            Please report bug or feature requests to{" "}
            <a href="https://github.com/mizchi/next-editor/issues/new">
              GitHub Issue
            </a>{" "}
            or <a href={"https://twitter.com/mizchi"}>@mizchi</a>
          </p>

          <table className="bp3-html-table bp3-small .modifier">
            <thead>
              <tr>
                <th>Keymap</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ctrl + 1</td>
                <td>set-layout-1</td>
              </tr>
              <tr>
                <td>Ctrl + 2</td>
                <td>set-layout-2</td>
              </tr>
              <tr>
                <td>Ctrl + 3</td>
                <td>set-layout-3</td>
              </tr>
              <tr>
                <td>(Cmd / Ctrl) + S</td>
                <td>editor:save</td>
              </tr>
              <tr>
                <td>(Cmd / Ctrl) + Shift + S</td>
                <td>editor:commit-all</td>
              </tr>
            </tbody>
          </table>
          {/* Load plugin's EntryPage */}
          <PluginEntryArea />
          {/* <Card>
            <ChangeLog />
          </Card> */}
        </div>
      </Card>
    )
  }
}
