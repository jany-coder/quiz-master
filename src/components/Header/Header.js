import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    const [activeItem, setActiveItem] = useState('Topics');

    const navigation = [
        { id: 1, name: 'Topics', href: '/', current: true },
        { id: 2, name: 'Statistics', href: '/statistics', current: false },
        { id: 3, name: 'Blog', href: '/blog', current: false },
      ]

      const handleClick = (name) => {
        setActiveItem(name);
      }
    return (
        <nav className='bg-slate-100'>
            <div className='container mx-auto max-w-container px-4 sm:px-6 lg:px-20'>
                <div className='flex gap-2 justify-between'>
                    <div className='py-2 text-2xl font-medium text-indigo-600'>Quiz master</div>
                    <ul className='flex gap-4'>
                        {
                            navigation.map(item => <li key={item.id} className={`py-2 font-medium ${activeItem === item.name ? 'text-amber-600' : 'text-indigo-600 hover:text-amber-600'}`}  onClick={() => handleClick(item.name)}><Link to={item.href}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;