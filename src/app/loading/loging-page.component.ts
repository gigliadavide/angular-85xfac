onSubmit(username: string, password: string) {
  store.dispatch(login({ username: username, password: password }));
}

