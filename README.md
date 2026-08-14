# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

Built a simple React ride-management webpage using dummy data, React components, and Tailwind CSS.
The application displays ride records with rider, driver, vehicle, status, fare, and date information.
A live search filters rides by Rider Name or Ride Status, while the dropdown provides an additional status filter.
Ride statuses are color-coded: green for Completed, yellow for Ongoing, and red for Cancelled.
Clicking a ride opens a modal popup containing additional details such as pickup location and destination.
The modal approach keeps the table compact and provides detailed information without changing the table layout.
