# playwright-examples

A collection of Playwright test examples for use with the [Playwright REPL](https://marketplace.visualstudio.com/items?itemName=playwright-repl.playwright-repl-vscode) VS Code extension.

Clone this repo, install dependencies, and start exploring — the extension's REPL, Locator Picker, Assert Builder, and Recorder all work out of the box.

## Quick Start

```bash
git clone https://github.com/stevez/playwright-examples.git
cd playwright-examples
npm install
npx playwright install
```

Open in VS Code, install the [Playwright REPL](https://marketplace.visualstudio.com/items?itemName=playwright-repl.playwright-repl-vscode) extension, and click **Launch Browser** in the Testing sidebar.

## Examples

| Directory | Description |
|-----------|-------------|
| `e2e/todomvc/` | Full TodoMVC test suite — adding, completing, editing, deleting, filtering todos |
| `e2e/api-mocking/` | Mock API responses, intercept and modify requests, HAR file replay |
| `e2e/clock/` | Fixed time, manual time advancement, inactivity monitoring |
| `e2e/svgomg/` | Testing an SVG optimization app |
| `e2e/playwright-dev/` | Tests against the Playwright docs site |
| `e2e/playwright-tests/` | Locator clicks, page fills, smoke tests, bare test structure |

### TodoMVC (20+ tests)

Organized by feature, each test in its own file:

- **Adding todos** — single, multiple, empty validation, whitespace trimming
- **Completing todos** — single, multiple, toggle all, uncomplete
- **Deleting todos** — single, specific, clear completed
- **Editing todos** — double-click edit, blur save, escape cancel, empty delete, whitespace trim
- **Filtering todos** — active, completed filters

Uses a shared fixture (`e2e/todomvc/fixtures.ts`) that navigates to the app and clears localStorage before each test.

### API Mocking

- Mock an API endpoint with custom JSON
- Intercept a response and append data
- Record and replay with HAR files

### Clock

- Set fixed time with `page.clock.setFixedTime()`
- Manually advance time with `page.clock.fastForward()`
- Test inactivity/timeout behavior

## Running Tests

```bash
# Run all tests
npx playwright test

# Run a specific directory
npx playwright test e2e/todomvc/

# Run a single test file
npx playwright test e2e/todomvc/adding-todos/should-add-single-todo.spec.ts
```

Or use the **Test Explorer** in VS Code for interactive test execution.

## Requirements

- Node.js >= 18
- `@playwright/test` >= 1.59
- `esbuild` (included) — speeds up bridge mode bundling. Without it, falls back to `esbuild-wasm` (bundled with the extension), which works but is slower

## License

MIT
