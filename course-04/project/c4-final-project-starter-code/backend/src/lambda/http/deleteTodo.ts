import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import * as middy from 'middy'
import { cors, httpErrorHandler } from 'middy/middlewares'

// import { deleteTodo } from '../../businessLogic/todos'
// import { getUserId } from '../utils'
import { DeleteTodoItem } from '../../businessLogic/todos'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId: string = event.pathParameters.todoId
    const authorization: string = event.headers.Authorization
    const split: string[] = authorization.split(' ')
    const jwtToken: string = split[1]

    const deleteData: string = await DeleteTodoItem(todoId, jwtToken)

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: deleteData
    }
  }
)

handler.use(httpErrorHandler()).use(
  cors({
    credentials: true
  })
)
