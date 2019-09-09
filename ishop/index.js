console.log(React, ReactDOM)

class GoodsCatalog extends React.Component {

  render() {
    const productList = this.props.productList;
    console.log(productList);
    const list = [];

    productList.forEach(element => {
      const item = React.createElement(
        'div',
        {className: 'product-item', key: element.key},

        React.createElement(
          'img',
          {className: 'product-image', src: element.image, width: 200, height: 200},
          ),
        React.createElement(
          'span',
          {className: 'product-name'},
          element.name,
        ),
        React.createElement(
          'span',
          {className: 'product-cost'},
          'Price: ' + element.cost,
        )
      )
      list.push(item);
    });

    return (
      React.createElement(
        'div',
        {},
        list,
      )
    )
  }
}

ReactDOM.render(
  React.createElement(GoodsCatalog, { productList: goodsList }),
  document.getElementById('container'),
)