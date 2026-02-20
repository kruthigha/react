# react

/**
 * AppLayout — main app layout component.
 * Header
 * --Logo
 * --NavItems
 * Body Component
 * --Search
 * --Restaurant Container
 *    => Restaurant cards
 * Footer
 * --copyrights
 * --Links
 * --Address
 * --Contact
 * @returns {JSX.Element} The rendered application layout.
 */

 Two types of import
 Default export import
  export default component
  import component from './src/component'

 Named export import
   export const component = ()=>{
    return jsx
   }
  import {component} from './src/component'


  Two types of web routing
  client side routing - doesnt make a ntk call while navigating to our page, everytg is already loaded into our app
  server side routing - makes a ntk call while navigating to our page,and that about.html is coming from server thats Server side routing


