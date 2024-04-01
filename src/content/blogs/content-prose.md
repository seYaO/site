---
title: markdown 扩展组件
date: 2024/04/01
---

# markdown 扩展组件

### Callout

::callout
This is a `callout` with full **markdown** support. It can be used to link to [another page](/pro/prose/card).
::

::callout{icon="i-heroicons-light-bulb"}
This suggests a helpful tip.
::


## Card

::card{title="Components" icon="i-heroicons-cube-transparent"}
Discover all the components available in **Nuxt UI Pro**.
::


## CardGroup

::card-group
  ::card
  ---
  title: Components
  icon: i-heroicons-cube
  to: https://nuxt.com/docs/api/components/client-only
  target: _blank
  ---
  Explore Nuxt built-in components for pages, layouts, head, and more.
  ::
  ::card
  ---
  title: Composables
  icon: i-heroicons-arrows-right-left
  to: https://nuxt.com/docs/api/composables/use-app-config
  target: _blank
  ---
  Discover Nuxt composable functions for data-fetching, head management and more.
  ::
  ::card
  ---
  title: Utils
  icon: i-heroicons-scissors
  to: https://nuxt.com/docs/api/utils/dollarfetch
  target: _blank
  ---
  Learn about Nuxt utility functions for navigation, error handling and more.
  ::
  ::card
  ---
  title: Commands
  icon: i-heroicons-command-line
  to: https://nuxt.com/docs/api/commands/add
  target: _blank
  ---
  List of Nuxt CLI commands to init, analyze, build, and preview your application.
  ::
::


## CodeBlock

```bash [Terminal]
code <project-name>
```

```bash
code <project-name>
```

## CodeGroup

::code-group

```bash [npx]
npx nuxi@latest init <project-name>
```

```bash [pnpm]
pnpm dlx nuxi@latest init <project-name>
```

```bash [bun]
bunx nuxi@latest init <project-name>
```

::

## Field

::field{name="name" type="string" required}
The `description` can be set as prop or in the default slot with full **markdown** support.
::



## FieldGroup

::field-group
  ::field{name="validate (path?: string, opts: { silent?: boolean })" type="Promise<T>"}
  Triggers form validation. Will raise any errors unless `opts.silent` is set to true.
  ::
  ::field{name="clear (path?: string)" type="void"}
  Clears form errors associated with a specific path. If no path is provided, clears all form errors.
  ::
  ::field{name="getErrors (path?: string)" type="FormError[]"}
  Retrieves form errors associated with a specific path. If no path is provided, returns all form errors.
  ::
  ::field{name="setErrors (errors: FormError[], path?: string)" type="void"}
  Sets form errors for a given path. If no path is provided, overrides all errors.
  ::
  ::field{name="errors" type="Ref<FormError[]>"}
  A reference to the array containing validation errors. Use this to access or manipulate the error information.
  ::
::


## ReadMore

::read-more{to="https://nuxt.com/docs/api/configuration/nuxt-config"}
Every option is described in the **Configuration Reference**.
::

## Shortcut

:shortcut{value="K"}

:shortcut{value="meta"} :shortcut{value="K"}


## Tabs

::tabs
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---

  ```mdc
  ::callout
  Lorem velit voluptate ex reprehenderit ullamco et culpa.
  ::
  ```
  ::

  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---

  ::callout
  Lorem velit voluptate ex reprehenderit ullamco et culpa.
  ::
  ::
::

## Tip

::tip
If you are familiar with Vue, you might wonder where `main.js` is (the file that normally creates a Vue app). Nuxt does this behind the scene.
::

::tip{icon="i-ph-check-circle-duotone"}
Well done! A browser window should automatically open for <http://localhost:3000>.
::

### Note

::note
You don't have to use TypeScript to build an application with Nuxt. However, it is strongly recommended to use the `.ts` extension for the `nuxt.config` file. This way you can benefit from hints in your IDE to avoid typos and mistakes while editing your configuration.
::

### Warning 警告

::warning
This is likely to need code changes in your project.
::

### Important 重要

::important
This method does not allow you to provide reactive data. We recommend to use `useHead()` in `app.vue`.
::

### Caution 谨慎

::caution
Be very careful before proxying headers to an external API and just include headers that you need. Not all headers are safe to be bypassed and might introduce unwanted behavior. Here is a list of common headers that are NOT to be proxied:

- `host`, `accept`
- `content-length`, `content-md5`, `content-type`
- `x-forwarded-host`, `x-forwarded-port`, `x-forwarded-proto`
- `cf-connecting-ip`, `cf-ray`
::