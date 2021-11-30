export default function mapProfileToStats(user) {
  const stats = []
  if (user.company) {
    stats.push({
      icon: 'building',
      title: user.company,
    })
  }
  if (user.location) {
    stats.push({
      icon: 'cursor',
      title: user.location,
    })
  }

  if (user.email) {
    stats.push({
      icon: 'mailbox',
      title: user.email,
    })
  }
  if (user.blog) {
    stats.push({
      icon: 'mailbox',
      title: user.blog,
    })
  }
  stats.push(
    {
      icon: 'person-lines-fill',
      title: 'Followers',
      badge: user.followers,
    },
    {
      icon: 'person',
      title: 'Following',
      badge: user.following,
    },
    {
      icon: 'star',
      title: 'Public Repos',
      badge: user.public_repos,
    }
  )
    return stats
}
