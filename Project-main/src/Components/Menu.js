import React, { useState } from 'react';

const MenuItem = ({ category, title, price, description }) => {
  return (
    <div className={`col-lg-6 menu-item ${category}`}>
      <div className="menu-content">
        <p>{title}<span className="dotted-line"></span>{price}</p>
      </div>
      <div className="menu-ingredients">
        {description}
      </div>
    </div>
  );
};

const Menu = () => {
  const menuItems = [
    {
        category: 'filter-starters',
        title: 'Kozhi Varuval',
        price: '469/-',
        description: "Tamil Nadu chicken fry dish that's marinated in a spicy masala and deep-fried for a crispy texture."
      },
      {
          category: 'filter-starters',
          title: 'Meen Varuval',
          price: '>499/-',
          description: "This dish is popular for its simplicity and the use of flavorful spices that highlight the natural taste of the fish."
        },
        {
          category: 'filter-starters',
          title: 'Andhra Royyala Vepudu',
          price: '599/-',
          description: "This dish features prawns (shrimp) marinated in a spicy and tangy masala and then shallow-fried until they are perfectly crispy and packed with bold flavors."
        },
        {
          category: 'filter-starters',
          title: 'Cauliflower 65',
          price: '399/-',
          description: "A popular and delicious South Indian dish made from cauliflower florets that are marinated, deep-fried, and then tossed in a spicy and tangy sauce. "
        },
        {
          category: 'filter-Tiffins',
          title: 'Masala Dosa',
          price: '269/-',
          description: "A thin, crispy rice crepe filled with a spiced potato mixture served with coconut chutney and sambar. "
        },
        {
          category: 'filter-Tiffins',
          title: 'Idli',
          price: '199/-',
          description: "Idli is a steamed rice and lentil cake that is soft, spongy, and typically served with coconut chutney and sambar"
        },
        {
          category: 'filter-Tiffins',
          title: 'Vada',
          price: '229/-',
          description:  "Vada is a deep-fried savory fritter made from urad dal (black gram) batter. It has a crispy exterior and a soft interior and is often served with sambar. "
        },
        {
          category: 'filter-Biryani',
          title: 'Vada',
          price: '229/-',
          description:  "Vada is a deep-fried savory fritter made from urad dal (black gram) batter. It has a crispy exterior and a soft interior and is often served with sambar. "
        },
        {
          category: 'filter-Biryani',
          title: 'Vegetable Pulao',
          price: '485/-',
          description:  "It is a flavorful and aromatic one-pot rice dish that's made with a variety of vegetables, fragrant spices, and long-grain basmati rice.  "
        },
        {
          category: 'filter-Biryani',
          title: 'hyderabadi chicken dum biryani',
          price: '599/-',
          description:  "This biryani is known for its flavorful and fragrant preparation, featuring marinated chicken, aromatic spices, and long-grain basmati rice cooked together in layers. "
        },
        {
          category: 'filter-Biryani',
          title: 'Chettinad Biryani',
          price: '629/-',
          description:  "It features marinated mutton cooked with a fiery masala, resulting in a bold and spicy flavor."
        }
  ];

  const [filter, setFilter] = useState('*');

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredItems = filter === '*'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  return (
    <section id="menu" className="menu section-bg black-background">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h4>Menu</h4>
          <h2>Check Our Tasty Menu</h2>
        </div>
        <div className="navbar">
          <ul>
            <li className={filter === '*' ? 'active' : ''} onClick={() => handleFilter('*')}>All</li>
            <li className={filter === 'filter-starters' ? 'active' : ''} onClick={() => handleFilter('filter-starters')}>Starters</li>
            <li className={filter === 'filter-Biryani' ? 'active' : ''} onClick={() => handleFilter('filter-Biryani')}>Biryani</li>
            <li className={filter === 'filter-Tiffins' ? 'active' : ''} onClick={() => handleFilter('filter-Tiffins')}>Tiffins</li>
          </ul>
        </div>
        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
          {filteredItems.map((item, index) => (
            <MenuItem
              key={index}
              category={item.category}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
