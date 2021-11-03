import React, { Component, Fragment } from 'react';
import './styles.css';

class Works extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      filename: ''
    };
  }

  componentDidMount() {
    const filename = this.props.location.pathname.substring(1, this.props.location.pathname.length);
    this.setState({ filename });
    fetch(`/data/${filename}.json`)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data, filename } = this.state;

    return (
      <Fragment>
        <h1>{data && data.title}</h1>
        <section className="works">
          {data && data.works.map(item => (
            <div className="item" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.meta}</p>
              <img src={`/photos/${filename}/${item.img}.jpg`} alt={item.title} />
            </div>
          ))}
        </section>
      </Fragment>
    );
  }
}

export default Works;
