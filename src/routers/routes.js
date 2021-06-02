
import Home from "@/view/Home"
import About from "@/view/About"
import Blog from "@/view/Blog"
import Message from "@/view/Message"
import Project from "@/view/Project"
export default
    [
        {
            name:'home',
            path: '/Home',
            component: Home
        },
        {
            name:'about',
            path: '/About',
            component: About
        },
        {
            name:'blog',
            path: '/Blog',
            component: Blog
        },
        {
            name:'message',
            path: '/Message',
            component: Message
        },
        {
            name:'project',
            path: '/Project',
            component: Project
        }]


