export default oauth.githubEventHandler({
  async onSuccess(event, { user }) {

    await setUserSession(event, {
      user: {
        username: user.login
      }
    })
    return sendRedirect(event, '/')
  },
})