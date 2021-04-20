import React from 'react';
import Proptypes from 'prop-types';
import Link from 'next/link'

const AppLayout = ({children}) => {
 return (
     <div>
         <div>
             <Link href="/"><a>nodebird</a></Link>
             <Link href="/profile"><a>profile</a></Link>
             <Link href="/signup"><a>signup</a></Link>
         </div>
         {children}
     </div>
 );
};

AppLayout.prototypes = {
    children: Proptypes.node.isRequired,
}

export default AppLayout;