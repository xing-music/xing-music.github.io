interface NavbarLink {
    text: string;
    endpoint: string;
}

export const links: NavbarLink[] = [
    {text: 'Bio', endpoint: '/'},
    {text: 'Videos', endpoint: '/videos'},
    {text: 'Releases', endpoint: '/releases'},
    {text: 'Presskit', endpoint: '/presskit'},
    {text: 'Contact', endpoint: '/contact'},
];

export const newLinks = [
    {text: 'Bio', to: '#bio'},
    {text: 'Videos', to: '#video'},
    {text: 'Releases', to: '#releases'},
    // {text: 'Shows', to: '#shows'},
    {text: 'Presskit', to: '#presskit'},
    {text: 'Contact', to: '#contact'},
]