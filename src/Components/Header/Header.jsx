import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2  '>
            <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
            <img className='w-12' src={Profile} alt="" />
              
        </div>
    );
};

export default Header;