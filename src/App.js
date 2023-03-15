import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class  App extends  React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItem: [],
      items:[
        {
          id :1,
          title :'Кресло-качалка глайдер Эталон',
          img : 'kreslo.jpeg',
          description : 'Элегантное кресло «Эталон» – удачное решение для домашнего или загородного отдыха, идеальный подарок для себя и близких. Натуральный шпон ясеня, воздухопроницаемый наполнитель ППУ, плавно скользящий механизм – высокое качество материалов позволит пользоваться креслом долгие годы.',
          category :'chairs',
          price :'39.99'
        },

        {
          id :2,
          title :'Комод для одежды Orient белый',
          img : 'komod.jpeg',
          description : 'Стильный высокий комод Orient имеет пять ящиков, чтобы ваши вещи, одежда, белье и самые разные мелочи были в порядке и всегда под рукой. Модель имеет необычный стильный дизайн благодаря изящным ножкам и ручкам в виде круглого кольца. Вы можете поставить такой комод в спальне, в гостиной, в прихожей или в молодежной комнате, он будет полезен в каждом помещении.',
          category :'comods',
          price :'49.99'
        },

        {
          id :3,
          title :'Тумба под ТВ Wood белый',
          img : 'tumba.jpeg',
          description : 'Тумба под телевизор Wood белый с закрытыми дверками, нишей для аппаратуры и изящными ножками понравится поклонникам современного стиля с нотками нетривиальности, предпочитающим строгие и лаконичные формы. В модели отсутствуют лишние элементы, при этом присутствует всё необходимое для установки телевизора и техники.',
          category :'tumbas',
          price :'29.99'
        },

        {
          id :4,
          title :'Кровать односпальная Ultra',
          img : 'bed.jpeg',
          description : 'Выдвижная кровать с дополнительным спальным местом – прекрасный вариант кровати для семей у которых есть необходимость в экономии пространства. Кровать довольно высокая,что дает преимущество перед другими моделями с выкатным спальным место,тк нижний ярус находится не так близко к полу.',
          category :'bed',
          price :'45.99'
        }
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItem = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return (
      <div className="wrapper" >
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
        <Categories  chooseCategory = {this.chooseCategory}/>
        <Items  onShowItem={this.onShowItem} items={this.state.currentItem} onAdd={this.addToOrder} />
        {this.state.ShowFullItem && < ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem}  item={this.state.fullItem}/>}
        <Footer/>

      </div>
    )
    }

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({ShowFullItem: !this.state.ShowFullItem})
}

chooseCategory(category){
  if (category=== 'all'){
    this.setState({currentItem : this.state.items})
    return
  }
  this.setState({
    currentItem: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el =>el.id !== id)})

}

addToOrder(item){

  let isInArray =false
  this.state.orders.forEach(el => {
    if(el.id ===item.id)
      isInArray = true
  })
  if(!isInArray)
    this.setState({orders: [...this.state.orders,item]})

    }
}

export default App;
