import { navigationStyle } from "./NavigationStyle.js";

function Navigation() {
  return `
    ${navigationStyle()}
    <nav class="navigation">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
      </ul>
    </nav>
  `;
}

export default Navigation;
