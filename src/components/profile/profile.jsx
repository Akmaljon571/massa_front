import { useEffect, useRef, useState } from 'react';
import vector from '../../img/Vector 255 OQ.svg'
import { message } from 'antd';
import img1 from '../../img/profile1.png'
import img2 from '../../img/profile2.png'
import img3 from '../../img/profile3.png'
import img4 from '../../img/profile4.png'
import useStart from '../../hooks/useStart';
import { api } from '../../content/start';
import {EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons'
import './profile.scss'

function Profile() {
    const [ openProfile, setOpenProfile ] = useState(true)
    const [pass, setPass] = useState('');
    const { token, setToken } = useStart()
    const [user, setUser] = useState({});
    const passRef = useRef()
    const textRef = useRef()
    const name =  useRef()
    const age = useRef()
    const man = useRef()
    const woman = useRef()
    const [messageApi, contextHolder] = message.useMessage();

    const send = () => {
        const obj = {
            name: name.current.value,
            age: Number(age.current.value),
            password: passRef.current?.value ? passRef.current?.value || '' : textRef.current?.value || '',
            gender: man.current.checked,
        }

        if (!passRef.current?.value && !textRef.current?.value) {
            delete obj.password
        }

        messageApi.open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 0,
        });

        fetch(api + 'user/update', {
            method: 'PATCH',
            headers: {
                "autharization": token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(re => re.json())
        .then(data => {
            if (data?.token) {
                localStorage.setItem('token', JSON.stringify(data?.token))
                setToken(data?.token)
                messageApi.destroy()
                messageApi.open({
                    type: 'success',
                    content: 'This is a success message',
                })
            } else {
                messageApi.destroy()
                messageApi.open({
                    type: 'error',
                    content: data?.message,
                })
            }
        })
    }

    const see = () => {
        if (pass !== '') {
            setPass('')
        } else if (passRef.current?.value) {
            setPass(passRef.current.value)
        } else if (textRef.current?.value) {
            setPass(textRef.current.value)
        } else {
            setPass('textRef.current?.value')
        }
    }

    useEffect(() => {
        fetch(api + 'user/one', {
            headers: {
                "autharization": token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(re => re.json())
        .then(data => setUser(data))
    }, [token]);

    return (  
        <section className='profile'>
            {contextHolder}
            <div className={openProfile ? "top" : "none"}>
                <div className="left">
                    <div>
                        <p>Name</p>
                        <input defaultValue={user?.name} ref={name} type="text" placeholder='Name' />
                    </div>
                    <div className='password'>
                        <p>Password</p>
                        {pass === '' ? 
                            <input ref={passRef} defaultValue={pass} type="password" placeholder='Password' />
                            :
                            <input ref={textRef} defaultValue={pass === 'textRef.current?.value' ? '' : pass} type="text" placeholder='Password' />
                        }
                        <span className='see' onClick={see}>
                            {pass ? 
                            <EyeOutlined />
                            :
                            <EyeInvisibleOutlined />
                            }
                        </span>
                    </div>
                    <div>
                        <p>Age</p>
                        <input defaultValue={user?.age} ref={age} type="number" placeholder='Age' />
                    </div>
                    <div>
                        <p>Gender</p>
                        <div className='gender'>
                            <label>
                                <input ref={man} defaultChecked={user?.gender} type="radio" name='a' />
                                Man
                            </label>
                            <label>
                                <input ref={woman} defaultChecked={!user?.gender} type="radio" name='a' />
                                Woman
                            </label>
                        </div>
                    </div>
                    <hr />
                    <button onClick={send}>
                        Confirmation
                    </button>
                </div>
                <div className="media_none right">
                    <img src={img1} alt="Image1" />
                    <img src={img2} alt="Image2" />
                    <img src={img3} alt="Image3" />
                    <img src={img4} alt="Image4" />
                </div>
            </div>
            <div className={openProfile ? "bottom" : "bottom bottom-close"}>
                <p>Profile</p>
                <button onClick={() => setOpenProfile(!openProfile)}><img src={vector} alt="Arrov" /></button>
            </div>
        </section>
    );
}

export default Profile;