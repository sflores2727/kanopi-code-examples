# Kanopi Example Code

## page.html

This is a basic page.html template from the default twentytwentyfive theme.
It uses a custom Gutenberg block called today to display today's date dynamically.
Alternatively I added a custom php function to accomplish this without a custom React Block.

Gutenberg/React
```html
<!-- wp:today/today {"align":"center"} /-->
```

PHP
```html
<!-- wp:paragraph {"align":"center"} -->
    <p class="has-text-align-center">
        Today is: <!-- wp:custom/current-date /-->
    </p>
<!-- /wp:paragraph -->
```

#### Technical Decisions, Assumptions, and Improvements
The PHP function does not display today's date on the backend editor so I added a custom dynamic Gutenberg/React block that displays well on both the frontend and backend

Ideally, I would also work with a design to make this template pop a bit better.

## styles.scss
Please review the Expandable Gallery Block Style.
```bash
expandable-gallery/src/expandable-gallery/style.scss
```

## Expandable Gallery and Today Blocks

These are custom Gutenberg/React block. Expandable Gallery is a nested static block and Today is a dynamic block. To use, please install the plugins by dropping the folders in the plugin directory. 

#### Technical Decisions, Assumptions, and Improvements
I based the Expandable Gallery off an custom ACF block I am built for a recent project. I converted it to React. With more time I would like to make it more animated and handle the responsive nature of the block in the backend.

## Functions.php

1. customize_admin_toolbar
    
   * A function that adds a custom link to the admin toolbar.

2. fse_render_current_date

   * A function that adds a custom PHP block to display today's date