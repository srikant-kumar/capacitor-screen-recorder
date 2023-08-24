# capacitor-screen-recorder

The Capacitor Screen Recorder plugin is a powerful tool for mobile app developers looking to enhance their applications with screen recording functionality. Seamlessly integrated with the Capacitor framework, this plugin allows users to effortlessly capture, save, and share video recordings of their app interactions. With customizable settings for video quality and recording controls, developers can provide users with a versatile and user-friendly recording experience. Whether for tutorial creation, bug reporting, or user engagement, the Capacitor Screen Recorder plugin offers a straightforward solution to incorporate screen recording capabilities into Capacitor-powered apps, enhancing their overall utility and user experience

## Install

```bash
npm install @srikant-kumar/capacitor-screen-recorder
npx cap sync
```

## API

<docgen-index>

* [`start(...)`](#start)
* [`stop(...)`](#stop)
* [`recorder_status(...)`](#recorder_status)
* [`addListener('onRecordingStarted', ...)`](#addlisteneronrecordingstarted)
* [`addListener('onRecordingComplete', ...)`](#addlisteneronrecordingcomplete)
* [`addListener('onRecordingError', ...)`](#addlisteneronrecordingerror)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### start(...)

```typescript
start(options: any) => Promise<any>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### stop(...)

```typescript
stop(options: any) => Promise<any>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### recorder_status(...)

```typescript
recorder_status(options: any) => Promise<any>
```

| Param         | Type             |
| ------------- | ---------------- |
| **`options`** | <code>any</code> |

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### addListener('onRecordingStarted', ...)

```typescript
addListener(eventName: 'onRecordingStarted', listenerFunc: (data: any) => Record<string, unknown>) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                               |
| ------------------ | ---------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'onRecordingStarted'</code>                                                  |
| **`listenerFunc`** | <code>(data: any) =&gt; <a href="#record">Record</a>&lt;string, unknown&gt;</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onRecordingComplete', ...)

```typescript
addListener(eventName: 'onRecordingComplete', listenerFunc: (data: any) => Record<string, unknown>) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                               |
| ------------------ | ---------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'onRecordingComplete'</code>                                                 |
| **`listenerFunc`** | <code>(data: any) =&gt; <a href="#record">Record</a>&lt;string, unknown&gt;</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('onRecordingError', ...)

```typescript
addListener(eventName: 'onRecordingError', listenerFunc: (data: any) => Record<string, unknown>) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                               |
| ------------------ | ---------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'onRecordingError'</code>                                                    |
| **`listenerFunc`** | <code>(data: any) =&gt; <a href="#record">Record</a>&lt;string, unknown&gt;</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
