import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 border-gray-300 mb-4 py-4'>
            <h2 className='text-4xl font-bold'>Knowledge Cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;