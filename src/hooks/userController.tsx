export type usuario = {
  firstName: string
  lastName: string
  email: string
  password: string
  avatar?: string
}

interface IUserProps {
  create(user: usuario, passwordAgain: string): void
}

export class UserController implements IUserProps {
  create(user: usuario, passwordAgain: string) {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password ||
      !passwordAgain
    ) {
      throw 'faltando um campo'
    }
    if (user.password !== passwordAgain) {
      throw 'senha não bate'
    }

    alert('criado com sucesso')

    localStorage.setItem(`@miric:${user.email}`, JSON.stringify(user))
  }
  login(email: string, password: string) {
    try {
      const user: usuario = JSON.parse(localStorage.getItem(`@miric:${email}`)!)
      console.log(user.email)
      console.log(email)
      if (!email || !password) {
        throw 'email or password not informed'
      }

      if (email !== user.email) {
        throw 'email or password is incorrectly'
      }
      if (password !== user.password) {
        throw 'email or password is incorrectly'
      }
      return user
    } catch (err) {
      console.error(err)
    }
  }
  update({ firstName, lastName, email, password, avatar }: usuario) {
    try {
      const obj: usuario = JSON.parse(localStorage.getItem(`@miric:${email}`)!)
      const objUpdate = {
        firstName: firstName ? firstName : obj.firstName,
        lastName: lastName ? lastName : obj.lastName,
        email,
        password: password ? password : obj.password,
        avatar: avatar
      }
      localStorage.setItem(`@miric:${email}`, JSON.stringify(objUpdate))
      localStorage.setItem(`@logged`, JSON.stringify(objUpdate))
      console.log(objUpdate)
    } catch (err) {
      console.error(err)
    }
  }
}
