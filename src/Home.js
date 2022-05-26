import React,{Component} from "react";

export class Home extends Component{
    render(){
        return(
            <>
            <div id="home">
                <div>
                    <h1 id="homeTitle">Welcome to Taxonomy</h1>
                    <br/>
                    <p id="homeP">The goal of this project is to show the beauty of the world of taxonomy. <br/><br/>
                    Taxonomy is the study of dividing life into categories that are appropriate. This use to be done by shared <br/>
                    characteristics suchs as similar beaks or fur patterns, but obviously this could lead to false equivalencies! <br/>
                    Taxonomy can be blurry
                    and seem very arbitrary, but it helps scientist create a network of life and shows <br/>that we all are related in some way, 
                    be it that we are both eukaryotic species or the fact that we<br/> are both mammals, we all have something in common.
                    <br/><br/>
                    As said before, the lines can seem like They're arbitrary but they matter. For example, Bats have wings and so do 
                    blue jays, so are they both birds? are they similar<br/>? of course not! Blue jays are birds! They lay eggs, they have 
                    feathers, and make nests... all stuff bats don't do, but all the stuff bats do is similar to what cows, dogs, and 
                    even we do!
                    </p>
                    <button className="btn btn-type-primary"></button>
                </div>
                <footer>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h6>© Copyright. All Rights Reserved.</h6>
            </footer>
            </div>
            </>
        )
    }
}