import React, { Component } from "react";
import "./App.css";
import api from "./services/imgApi";
import { Searchbar, ImageGallery, Modal, Loader, Button } from "./components";

class App extends Component {
  state = {
    query: "",
    page: 1,
    perPage: 12,

    galleryItems: [],
    source: "",

    modal: false,
    loader: false,
    loadMore: false,
  };
  componentDidMount() {
    // console.log("mount");
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log("update");
    if (prevState.query !== this.state.query) {
      this.getFetchData();
      this.setState({ page: 1 });
    }
  }
  componentWillUnmount() {}

  getQueryValue = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.search.value);
    this.setState({
      query: e.target.elements.search.value,
      galleryItems: [],
    });
    e.target.elements.search.value = "";
  };
  getFetchData = () => {
    const { query, page, perPage } = this.state;
    this.setState({ loader: true });
    return api
      .getFetch(query, page, perPage)
      .then((array) => {
        // console.log(array);
        if (array.length > 0) {
          this.setState((prevState) => {
            return {
              galleryItems: [...prevState.galleryItems, ...array],
              page: prevState.page + 1,
              loadMore: true,
            };
          });
        }
        if (page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      })
      .finally(() => this.setState({ loader: false }));
  };

  openModal = (source) => {
    return this.setState({ source: source, modal: true });
  };
  closeModal = (e) => {
    // console.dir(e.target);
    if (e.code === "Escape" || e.target.nodeName !== "IMG") {
      this.setState({ source: "", modal: false });
    }
  };

  render() {
    const { getQueryValue, openModal, closeModal, getFetchData } = this;
    const { galleryItems, modal, source, loader, loadMore } = this.state;

    return (
      <div className="App">
        <Searchbar getQueryValue={getQueryValue} />
        <ImageGallery galleryItems={galleryItems} openModal={openModal} />
        {loader && <Loader />}
        {modal && <Modal closeModal={closeModal} source={source} />}
        {loadMore && galleryItems.length > 0 && (
          <Button getFetchData={getFetchData} />
        )}
      </div>
    );
  }
}

export default App;
