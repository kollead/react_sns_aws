import React from 'react';
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import Link from 'next/link'
import {Input, Menu, Row, Col} from 'antd'
import styled from 'styled-components'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`

const AppLayout = ({children}) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)

 return (
     <div>
         <Menu mode="horizontal">
             <Menu.Item>
                <Link href="/"><a>nodebird</a></Link>
             </Menu.Item>
             <Menu.Item>
                <Link href="/profile"><a>profile</a></Link>
             </Menu.Item>
             <Menu.Item>
                 <SearchInput enterButton/>
             </Menu.Item>
             <Menu.Item>
                <Link href="/signup"><a>signup</a></Link>
             </Menu.Item>
         </Menu>
         <Row gutter={8}>
             <Col xs={24} md={6} >
                 {isLoggedIn ? <UserProfile /> : <LoginForm />}
             </Col>
             <Col xs={24} md={12} >                 
                {children}
             </Col>
             <Col xs={24} md={6} >
                <a href="" target="_blank" rel="noreferrer noopener">Sujin Bae</a>
             </Col>
         </Row>
     </div>
 );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AppLayout;