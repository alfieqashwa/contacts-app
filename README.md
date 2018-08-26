# Which Components Should Be Stateful?

Recognizing which components should own state is often the most challenging part for React newcomers to
understand. When in doubt, follow this four-step checklist. For each piece of state in your application,
• Identify every component that renders something based on that state.
• Find a common owner component (a single component above all the components that need the state in the hierarchy).
• Either the common owner or another component higher up in the hierarchy should
own the state.
• If you can’t find a component where it makes sense to own the state, create a new component simply to hold the state and add it somewhere in the hierarchy above the common owner component.

---

## The component hierarchy is

• ContactsApp: The main component
• SearchBar: Shows an input field so the user can filter the contacts
• ContactList: Loops through data, creating a series of ContactItems
• ContactItem: Displays the contact data

---
