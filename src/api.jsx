export const API = "https://dogsapi.origamid.dev/json"

export function TOKEN_POST(body) {
  return {
    url: API + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  }
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }
}

export function USER_GET(token) {
  return {
    url: API + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }
}

export function USER_POST(body) {
  return {
    url: API + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  }
}

export function PASSWORD_LOST(body) {
  return {
    url: API + "/api/password/lost",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  }
}

export function PASSWORD_RESET(body) {
  return {
    url: API + "/api/password/reset",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  }
}

export function PHOTO_POST(data, token) {
  return {
    url: API + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: data,
    },
  }
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }
}

export function PHOTO_GET(id) {
  return {
    url: API + "/api/photo/" + id,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }
}

export function PHOTO_DELETE(id) {
  return {
    url: API + "/api/photo/" + id,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  }
}

export function COMMENT_POST(id, body) {
  return {
    url: `${API}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      body: JSON.stringify(body),
    },
  }
}

export function GET_STATS() {
  return {
    url: API + '/api/stats',
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  }
}
