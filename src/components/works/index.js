import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';

class Works extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      filename: ''
    };
  }

  loadData(props) {
    const filename = props.location.pathname.substring(1, props.location.pathname.length);
      this.setState({ filename });
      fetch(`/data/${filename}.json`)
        .then(response => response.json())
        .then(data => this.setState({ data }));
  }

  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.loadData(nextProps); 
    }
  }

  render() {
    const { data, filename } = this.state;

    if (!data) return null;

    return (
      <Fragment>
        <h1>{data.title}</h1>
        <section className="works">
          {data.works.map((item, i) => (
            <div className="item" key={`${item.title} + ${i}`}>
              <h2>{item.title}</h2>
              <p>{item.meta}</p>
              <img src={`/photos/${filename}/${item.img}.jpg`} alt={item.title} />
            </div>
          ))}
        </section>
        <Helmet>
          <title>{`${data.title} - Milagros Martos Rubio`}</title>
          <meta name="description" content={`${data.title}`}></meta>
        </Helmet>
      </Fragment>
    );
  }
}

export default Works;
