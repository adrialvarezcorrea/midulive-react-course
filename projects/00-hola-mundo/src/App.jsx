import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'alvarezAdri_',
        name: 'Adri Álvarez',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    },
    {
        userName: 'reactjs',
        name: 'React',
        isFollowing: true
    }
]

export function App () {
    return (
        <section className="App">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}