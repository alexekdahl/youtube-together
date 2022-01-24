import { GetServerSidePropsContext } from 'next'

import { Rooms, MessageResponse } from '../types'

type QueryProp = {
  query?: string
  room?: string | null
}

export const serverSideWhoAmI = async (ctx: GetServerSidePropsContext) => {
  const { req } = ctx
  const { cookies } = req
  // @TODO throw different errors depending on case
  if (!cookies.sid) throw new Error()

  try {
    const res = await fetch(`${process.env.API_URL}/api/whoami`, {
      headers: { Cookie: `sid=${cookies.sid}` },
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const whoAmI = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/whoami`, {
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const apiGetRooms = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`, {
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    const allRooms: Rooms = await res.json()
    return allRooms.rooms
  } catch (e) {
    throw new Error()
  }
}

export const apiGetRoomMessages = async ({ query, room }: QueryProp) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/rooms/${room}/messages${query ? query : ''}`,
      {
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' }
      }
    )
    if (!res.ok) throw new Error()
    const { messages } = (await res.json()) as MessageResponse
    return messages
  } catch (e) {
    throw new Error()
  }
}

export const logout = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/logout`, {
      method: 'POST',
      credentials: 'include'
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const apiSaveNewPlaylistOrder = async (room: string, data: any) => {
  await fetch(`${process.env.API_URL}/api/rooms/${room}/playlist`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

export const apiPostPlaylistItem = async (room: string, data: any) => {
  try {
    const res = await fetch(
      `${process.env.API_URL}/api/rooms/${room}/playlist`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: data })
      }
    )
    if (!res.ok) console.log('res :>> ', res)
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const apiPostRoom = async (data: any) => {
  console.log('data', data)
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    console.log('res.ok', res.ok)
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}
export const apiLogin = async (data: any) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const apiRegister = async (data: any) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}

export const apiGetRoomByName = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms/${slug}`)
    if (!res.ok) throw new Error()
    return await res.json()
  } catch (e) {
    throw new Error()
  }
}
