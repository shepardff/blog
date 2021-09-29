import React from "react";
import { Button, Image, Media } from "react-bootstrap";
import axios from "axios";

import Social from "./Social";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            tags: [],
            recent: [],
            insta: [],
        }
    }

    categoryList(categories) {
        return categories.map(
            elem => <li><a href={"/category/entertainment"}>{elem}</a></li>
        );
    }

    tagButtons(tags) {
        return tags.map(
            elem => <Button variant="light">{ elem }</Button>
        );
    }

    recentList(recent) {
        return recent.map(elem => {
            return (
                <Media className="mb-2 recent-media">
                    <img src={ "/static/media/" + elem.img } className="mr-3" alt=""/>
                    <Media.Body>
                        <a href={"blog-post"}>{ elem.title }</a>
                        <p>{ elem.date }</p>
                    </Media.Body>
                </Media>
            )
        })
    }

    instaList(insta) {
        return insta.map(
            elem => <a href="https://instagram.com/"><Image className="mr-3 mb-3" src={elem}/></a>
        )
    }

    componentDidMount() {
        axios.get('/api/sidebar').then(res => {
            this.setState({
                categories: this.categoryList(res.data.categories),
                tags: this.tagButtons(res.data.tags),
                recent: this.recentList(res.data.recent),
                insta: this.instaList(res.data.instagram),
            })
        })
    }

    render() {
        return (
            (
                <div>
                    <div className="widget">
                        <h5>Categories</h5>
                        <ul className="categories-list">
                            { this.state.categories }
                        </ul>
                    </div>

                    <div className="widget">
                        <h5>Recent Posts</h5>
                        <div>
                            { this.state.recent }
                        </div>
                    </div>

                    <div className="widget">
                        <h5>Tags</h5>
                        <div className="tags-container">
                            { this.state.tags }
                        </div>
                    </div>

                    <div className="widget">
                        <h5>Instagram</h5>

                        { this.state.insta }
                    </div>

                    <div className="widget">
                        <h5>Follow us</h5>
                        <div className="d-flex justify-content-center follow-us-icons">
                            <Social />
                        </div>
                    </div>
                </div>
            )
        )
    }
}

export default Sidebar;