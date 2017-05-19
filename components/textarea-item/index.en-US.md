---
category: Components
type: Data Entry
title: TextareaItem
---


A foundational component for inputting multi-line text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| value | the value to show for the textarea (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controled component)  | String | |
| defaultValue | provides an initial value that will change when the user starts typing.  | String |  -  |
| placeholder      | the string that will be rendered before text input has been entered. | String | ''  |
| editable    | whether is editable         | bool |  true  |
| disabled    | whether is disabled         | bool |  false  |
| clear      |   whether to display clear icon      | bool |  true  |
| rows      |   sets the number of lines for a textarea     | number |   1 |
| count |  it is used for word count and maxlength, the default is 0 which indicates that word count is turned off. | number | -  |
| onChange    | callback that is called when the textarea's text changes. | (val: string): void |  -  |
| onBlur     | callback that is called when the textarea is blurred. | (val: string): void |   -  |
| onFocus    | callback that is called when the textarea is focused. | (val: string): void |  -  |
| error       | whether to display error icon         | bool |  false  |
| onErrorClick   | callback that is called when the error icon is clicked   | (): void |    |
| autoHeight | auto adjust height(only use one of `canautoHeight` and `rows` properties | bool  | false  |
| labelNumber  | number of label text, valid value is 2 to 7 | number | `5` |
| name (`Web Only`)    | the name of textarea      | String |   -  |
| prefixListCls (`Web Only`)    |   the class name prefix of list      | String |  `am-list`  |
| autoFocus (`Web Only`)   | whether to focus the textarea on `componentDidMount`, each page has only one `TextareaItem` can be auto focused.（Note: It is no guarantee that all browsers are supported） | bool | false  |
| focused (`Web Only`)   | whether the `InputItem` has been focused on `componentDidMount`, you need to change this property on `onFocus` or `onBlur` callback | bool | false  |
| title (`Web Only`)    | the description of textarea        | String/node |  '' |

> More available react-native `TextareaItem` API can be found at [react-native TextInput](http://facebook.github.io/react-native/docs/textinput.html)
