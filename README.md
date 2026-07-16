# Evergreen Outdoor Living

A responsive, multi-page website for a fictional landscaping and outdoor-living company. This concept project demonstrates how a polished small-business front end can present services, build trust, showcase previous work, and guide visitors toward requesting an estimate.

> **Portfolio concept:** Evergreen Outdoor Living is a fictional business created to demonstrate front-end development, responsive design, accessibility, and automated testing. It is not presented as paid client work.

## Project overview

The website is designed around a practical business goal: turn local visitors into qualified leads. It uses clear service information, project examples, trust indicators, testimonials, and repeated calls to action to move visitors toward the contact form.

The project includes five connected pages:

- Home
- Services
- About
- Projects
- Contact

## Features

- Responsive layouts for mobile, tablet, and desktop screens
- Consistent navigation and footer across all pages
- Accessible mobile menu with keyboard support
- Clear active-page navigation states
- Service, value, project, process, and testimonial sections
- Lead-generation forms with semantic labels and native validation
- Search-friendly titles and meta descriptions
- Visible keyboard focus states
- Cross-browser Playwright test coverage
- Clearly documented frontend and backend handoff points

## Technologies

- **HTML5** for semantic page structure
- **Tailwind CSS** for responsive layouts, grids, flexbox, spacing, and component-level styling
- **Custom CSS** for brand colors, typography, shared surfaces, and global visual consistency
- **Mobile CSS** for focused small-screen refinements
- **JavaScript** for accessible mobile-navigation behavior
- **Playwright** for automated Chromium, Firefox, and WebKit testing

## Styling architecture

The styling is intentionally divided by responsibility to make maintenance and debugging easier:

- `style.css` owns the shared design system, including colors, typography, backgrounds, buttons, forms, and reusable surfaces.
- `mobile.css` contains small-screen refinements that apply below the tablet breakpoint.
- Tailwind utility classes remain in the HTML where they control local layout, spacing, cards, grids, flexbox, and responsive breakpoints.

This separation makes it easier to determine whether a visual issue comes from the global brand system, mobile behavior, or a specific component layout.

## JavaScript behavior

The JavaScript is kept intentionally readable and documented. It currently handles:

- Opening and closing the mobile navigation
- Keeping `aria-expanded` synchronized with the visual menu state
- Closing the menu when the viewport switches to desktop width
- Closing the menu with the Escape key
- Returning keyboard focus to the menu button
- Preventing Firefox from overriding the intended focus behavior

## Automated testing

The Playwright suite currently verifies:

- The homepage title, main heading, and primary call to action
- Navigation from the homepage to the Services page
- Mobile-menu visibility and accessibility state
- Escape-key behavior and keyboard-focus restoration
- Cross-browser behavior in Chromium, Firefox, and WebKit

The current suite contains three scenarios across three browser engines, for a total of nine automated tests.

### Run the tests

Install project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

Serve the website locally at:

```text
http://127.0.0.1:5501/index.html
```

The Playwright `baseURL` is configured for port `5501`. If your local server uses a different port, update `baseURL` in `playwright.config.js`.

Run the complete test suite:

```bash
npm test
```

Open Playwright's interactive interface:

```bash
npm run test:ui
```

Run the tests while watching the browsers:

```bash
npm run test:headed
```

Open the latest HTML report:

```bash
npx playwright show-report
```

## Project structure

```text
evergreen-outdoor-living/
├── index.html
├── services.html
├── about.html
├── projects.html
├── contact.html
├── style.css
├── mobile.css
├── script.js
├── tests/
│   └── landingPageTest.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Backend handoff

This repository focuses on front-end implementation. The estimate forms currently use browser-native validation but do not submit information to a server.

A backend developer or form service can connect:

- Form submission and data processing
- Database storage
- Email notifications
- Spam protection
- Authentication, if later required
- Server-side validation and security controls

The HTML and comments identify the primary integration points so backend work can be added without restructuring the interface.

## Development and quality process

This project was written and directed by me using an AI-assisted engineering workflow. AI was used as a production accelerator for longer, repetitive, or time-consuming parts of the implementation—not as a replacement for understanding or owning the code.

Both the developer and AI-assisted tools contributed to the implementation process. I reviewed and confirmed every contribution, made the final technical decisions, and remained responsible for the completed result. Before publication, I manually tested the interface and ran automated cross-browser tests to verify that the website behaved as intended.

Quality checks included:

- Manual review and confirmation of AI-assisted code
- Final developer ownership of implementation decisions
- Manual interaction testing
- Responsive layout review
- Keyboard-navigation testing
- Cross-browser Playwright tests
- JavaScript syntax validation
- Code and accessibility review

## Future improvements

- Add original hero and project photography
- Connect the estimate form to a backend or form service
- Add expanded form success and error states
- Add automated checks for every internal navigation link
- Add visual-regression snapshots at key viewport sizes
- Move Tailwind from the browser CDN to a production build process
- Deploy the completed website and add a live-demo link

## License

No license is currently provided. The source code is available for portfolio review, but permission to copy, modify, or redistribute it is not granted.
