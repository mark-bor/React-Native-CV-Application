import { Text } from "react-native";
import { Link } from "../components/index";



export const TECHNOLOGIES = [
    {
        title: "HTML",
        image: require('../images/html_logo.png'),
	    informationEN() {
            return (
                <>
                    <Text>
                        HTML is used on whole website to mark up pages.
                        {'\n'}
                        It is in combination with JavaScript.
                        {'\n'} 
                        {'\n'} 
                        Lin`k to the code on GitHub is
                    </Text>
                    <Link url='https://github.com/mark-bor/My-Site-React/tree/master/src'>
                        <Text style={{color: '#F5F5F5'}}> here</Text>
                    </Link>.
                </>
            )
        },
	    informationUA: "HTML використовується на всьому сайті для розмітки сторінок. Він також використовується в комбінації з JavaScript У React.js. </br></br> Посилання на код на GitHub <a class='link_on_tech' href='https://github.com/mark-bor/My-Site-React/tree/master/src' target='_blank'>тут</a>."
    },
    {
        title: "CSS",
        image: require('../images/css_logo.svg.png'),
        informationEN() {
            return (
                <>
                    <Text>
                        CSS is used on whole website to style pages.
                        {'\n'} 
                        {'\n'} 
                        Link to the code on GitHub is 
                    </Text>
                    <Link url='https://github.com/mark-bor/My-Site-React/tree/master/src'>
                        <Text style={{color: '#F5F5F5'}}> here</Text>
                    </Link>.
                </>
            )
        },
	    informationUA: "CSS використовується на всьому сайті для стилізації сторінок. </br></br> Посилання на код на GitHub <a class='link_on_tech' href='https://github.com/mark-bor/My-Site-React/tree/master/src' target='_blank'>тут</a>."
    },
    {
        title: "JavaScript",
        image: require('../images/javascript_logo.png'),
        informationEN() {
            return (
                <>
                    <Text>
                        JavaScript is used in the whole website to add interactivity to the app.
                        {'\n'} 
                        It is in combination with HTML.
                        {'\n'} 
                        {'\n'} 
                        Link to the code on GitHub is 
                    </Text>
                    <Link url='https://github.com/mark-bor/My-Site-React/tree/master/src'>
                        <Text style={{color: '#F5F5F5'}}> here</Text>
                    </Link>.
                </>
            )
        },
	    informationUA: "JavaScript використовується на всьому сайті для інтерактивності сторінок. Може використовуватися в комбінації з HTML. </br></br>Посилання на код на GitHub <a class='link_on_tech' href='https://github.com/mark-bor/My-Site-React/tree/master/src' target='_blank'>тут</a>."
    },
    {
        title: "React Native",
        image: require('../images/react_logo.svg.png'),
        informationEN() {
            return (
                <>
                    <Text>
                        This app is built using the React library.
                        {'\n'} 
                        {'\n'} 
                        Link to the code on GitHub is 
                    </Text>
                    <Link url='https://github.com/mark-bor/My-Site-React'>
                        <Text style={{color: '#F5F5F5'}}> here</Text>
                    </Link>.
                </>
            )
        },
	    informationUA: "Цйе сайт побудований за допомогою бібліотеки React. </br></br>Посилання на код на GitHub <a class='link_on_tech' href='https://github.com/mark-bor/My-Site-React' target='_blank'>тут</a>."
    },
    {
        title: "React Navigation",
        image: require('../images/react-navigation_logo.png'),
        informationEN() {
            return (
                <>
                    <Text>
                        Via this library I added transition to other pages.
                        {'\n'} 
                        {'\n'} 
                        Link to the code on GitHub is 
                    </Text>
                    <Link url='https://github.com/mark-bor/My-Site-React/tree/master/src'>
                        <Text style={{color: '#F5F5F5'}}> here</Text>
                    </Link>.
                </>
            )
        },
	    informationUA: "За допомогою цієї бібліотеки я додав можливість переходу на інщі сторінки. </br></br>Посилання на код на GitHub <a class='link_on_tech' href='https://github.com/mark-bor/My-Site-React/tree/master/src' target='_blank'>тут</a>."
    },
]