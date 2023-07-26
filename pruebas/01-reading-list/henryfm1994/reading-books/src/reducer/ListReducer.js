export const initialList = JSON.parse(window.localStorage.getItem('list')) || [];

const updateList = state => {
  window.localStorage.setItem('list', JSON.stringify(state))
}

export const ListReducer = (state, action) => {

  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_LIST': {

      if (state.some(elem => elem.ISBN === payload.ISBN)) return state

      const newList = [
        ...state, payload
      ]
      updateList(newList)
      return newList
    }

    case 'DEL_FROM_LIST': {

      const newList = state.filter(elem => elem.ISBN !== payload.ISBN)

      updateList(newList)
      return newList
    }
  }
  return state
}