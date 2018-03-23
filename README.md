# Personal Website
The place where I go to write about all the things I have done in my life: https://johnborkowski.me.

The website was written using Facebook's React.js framework.

### Installation

Feel free to use this website as a template for your own. To install:

```
  git clone https://github.com/borkjt9/personal-website.git personal-website
  cd personal-website
  npm install
  npm start
```

Then open http://localhost:3000/ to see your website.

This website was built using Facebook's create-react-app template as a base. For additional detail on how to install new packages, test react applications, etc, please visit: https://github.com/facebook/create-react-app.

### Testing

I used a combination of:
1. Jest, Facebook's open-sourced JavaScript testing framework;
2. Enzyme, a JavaScript Testing utility created by AirBnB that makes it easier to assert, manipulate, and traverse React Components' output;

To run the tests, use the following command:
```
npm test
```

### Styling

#### Sass
I use .scss files in lieu of .css files. I find the nesting and variable assignment properties help to keep the project organized.

#### Organization
To organize my styles, I use the Blocks, Elements, and Modifiers (BEM) methodology. While the naming convention may seem verbose at times,  I find it makes components easier to understand and debug.

For more detail on the BEM method, visit: http://getbem.com/introduction/.

## Deployment

To build for production, run the following command:
```
  npm run build
```


I deployed the website using on Amazon Web Services. Specifically, I hosted the static files and images on S3, created a secure certificate with the Certificate Manager, and deployed the website using CloudFront (Amazon's Content Delivery Network).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
