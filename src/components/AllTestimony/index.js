import React, { Component } from "react";
// import appContext from '../../store';
import { reviewService } from "../../services"
import axios from "axios";
import "../../../src/assets/stylesheets/adminPage.scss";

export class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }
 
  async componentDidMount() {
    try {

      const  resAllTestimony = await reviewService.allTestimony();
     
      this.setState({
        data: resAllTestimony.data,
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  }

  render() {
    return (
      <div style={{ border: "3px solid green" }}>
        <section>
          <h1>Tous les commentaires</h1>
          {this.state.data.map((element, index) => {
            return (
              <div key={index}>
                <div>
                  <h1>{element.last_name}</h1>
                  <p>{element.role}</p>
                  <p>{element.opinion}</p>
                </div>
                <button><a href={"/votrePetitMot/" + element.id}>Details</a></button>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}