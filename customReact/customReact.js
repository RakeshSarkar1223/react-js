function customRender(reactEle, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.link)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.append(domElement)
const domElement = document.createElement(reactElement.type);
    if (reactElement.children) {
        domElement.innerHTML = reactElement.children;
    }
    if (reactElement.props) {
        if (reactElement.props.href) {
            domElement.setAttribute('href', reactElement.props.href);
        }
        if (reactElement.props.target) {
            domElement.setAttribute('target', reactElement.props.target);
        }
    }
    container.appendChild(domElement);

}


const reactElement = {
    type:'a',
    props: {
        link: 'https://google.com',
        target:'_blank'
    },
    children:'Click me for magic'
}


const Mc = document.querySelector('#root');

customRender(reactElement, Mc)