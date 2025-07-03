# Emojipedia Project

This project is a simple React application that displays a list of emojis along with their names and meanings. The emojis are displayed dynamically from a predefined data source, called `Emojipedia`.

## Features

- **React-based Application**: The app is built using React, using state and props to manage and display emoji data.
- **Mapping through Data**: The emojis and their details are rendered by mapping through an array of objects (`emojipedia.js`).
- **Reusable Components**: The `Emojis` component is reusable to display each emoji's information, and the `App` component maps the data into the `Emojis` component.
- **Accessible Design**: Emojis have accessible `aria-label` attributes for better screen reader compatibility.

## Screenshots

Here’s a screenshot of the project in action:

![Project Screenshot](assets/screenshots/screenshot1.png)


## Installation

1. **Clone the repository** to your local machine.
    ```bash
    git clone https://github.com/your-username/emojipedia.git
    ```

2. **Navigate to the project directory**.
    ```bash
    cd emojipedia
    ```

3. **Install the necessary dependencies**.
    ```bash
    npm install
    ```

4. **Start the development server**.
    ```bash
    npm run dev
    ```

5. Open the application in your browser at `http://localhost:5173`.

## Contributing

Feel free to fork this repository and submit pull requests with improvements. If you have suggestions or issues, please open an issue on the GitHub page.

## License

This project is open-source and available under the [MIT License](LICENSE).
