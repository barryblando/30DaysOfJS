class Github {
  constructor () {
    this.client_id = '55f10cecc2b28f23065d';
    this.client_secret = '51497d4d816debaa39b8a21e0944ee06e7208981';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // Wait for both of them to come back
    // if profile takes a second but repos takes 10 seconds, the whole thing is gonna take 10 seconds altogether
    const res = await Promise.all([profileResponse, reposResponse]);
    const dataPromises = res.map(r => r.json()); // Two extra promises which is turning it into json, await it
    const [profile, repos] = await Promise.all(dataPromises);

    // return profile data
    return {
      profile,
      repos
    };
  }
}