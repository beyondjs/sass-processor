# BeyondJS Processor for SASS

## Introduction

BeyondJS is a powerful JavaScript framework designed to streamline development across multiple environments like
browsers, Node.js, Deno, and Bun. A core feature of BeyondJS is its processor system, which includes support for SASS, a
popular CSS preprocessor. The SASS processor in BeyondJS compiles SASS/SCSS files into standard CSS, facilitating easier
styling and maintenance of your application.

## What is a BeyondJS Processor?

A BeyondJS processor is a tool that handles specific types of files within a project. The SASS processor is responsible
for compiling SASS/SCSS files, allowing developers to leverage the advanced features of SASS while ensuring
compatibility with standard CSS.

## Setting Up BeyondJS Processor for SASS

### Creating a SASS Module

To create a new SASS module in BeyondJS, you need to create a folder for your module and add a `module.json` file to
configure the SASS processor.

### Example `module.json` Configuration

```json
{
	"bundles": {
		"css": { "processor": "sass" }
	}
}
```

In this configuration:

-   The `css` bundle is processed using the SASS processor.

### Example Directory Structure

```
my-sass-module/
├── src/
│   ├── styles/
│   │   └── main.scss
├── module.json
```

### Example SASS File (`main.scss`)

```scss
$primary-color: #3498db;

body {
	font-family: Arial, sans-serif;
	background-color: $primary-color;
}

h1 {
	color: white;
}
```

## Benefits of Using BeyondJS Processor for SASS

1. **Enhanced Styling Capabilities**:

    - Utilize SASS features like variables, nested rules, and mixins to write cleaner and more maintainable CSS.

2. **Modular Bundling**:

    - Each SASS file is compiled and bundled independently, leading to faster loading times and better performance.

3. **Automatic Compilation**:

    - BeyondJS automatically handles the compilation of SASS/SCSS files, eliminating the need for manual build steps.

4. **Integration with Other Processors**:
    - Easily integrate the SASS processor with other processors in BeyondJS, such as TypeScript for JavaScript files.

## Example Usage in a BeyondJS Project

Here's an example of how to set up a BeyondJS project using both the SASS and TypeScript processors.

### `module.json` Configuration

```json
{
	"bundles": {
		"js": { "processor": "typescript" },
		"css": { "processor": "sass" }
	}
}
```

### Directory Structure

```
my-beyondjs-project/
├── src/
│   ├── components/
│   │   └── App.ts
│   ├── styles/
│   │   └── main.scss
├── module.json
```

### TypeScript Component (`App.ts`)

```typescript
import './styles/main.scss';

console.log('Hello BeyondJS with SASS!');
```

## Conclusion

The BeyondJS processor for SASS simplifies the development process by automating the compilation of SASS/SCSS files and
integrating seamlessly with other processors. This modular approach enhances efficiency, performance, and flexibility,
allowing developers to build scalable and maintainable applications. By leveraging the SASS processor in BeyondJS, you
can write advanced, maintainable styles with ease.
