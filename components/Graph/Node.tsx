import * as React from 'react'
import { Styled } from 'theme-ui'
import { Flex, Radio, Box, Text } from '@theme-ui/components'
import { Graph } from 'state-designer'
import Card from '../Card'
import EventButton from '../EventButton'
import ListContainer from './ListContainer'

type Props = Graph & {
  canEvent: (name: string, payload: any) => boolean
  onEvent: (name: string, payload: any) => void
  root?: boolean
}

const Node: React.FC<Props> = ({
  name,
  initial,
  active,
  events,
  states,
  canEvent,
  autoEvents,
  onEvent,
  root = false,
}) => {
  const hasEvents = events.length > 0
  const hasContent = states || hasEvents || autoEvents.length > 0

  return (
    <Box>
      {name !== 'root' && (
        <Flex
          px={3}
          py={2}
          backgroundColor="muted"
          sx={{
            alignItems: 'center',
            borderStyle: 'solid',
            borderWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: active ? 'grey30' : 'grey10',
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderStyle: 'solid',
              borderWidth: 1,
              borderColor: active ? 'primary' : 'grey30',
              borderRadius: '100%',
              backgroundColor: active ? 'neon' : 'muted',
              boxShadow: '0px 0px 8px 1px rgba(40, 173, 250, .2)',
              mr: 2,
            }}
          />
          <Text
            variant="event"
            sx={{
              color: active ? 'light' : 'bright',
              fontWeight: 'bold',
            }}
          >
            {name}
            {initial && ' *'}
          </Text>
        </Flex>
      )}
      {hasContent && (
        <Box px={4} py={3}>
          {autoEvents.length > 0 && (
            <ListContainer name="Auto Events">
              <Styled.ul>
                {autoEvents.map((value, index) => {
                  return (
                    <Styled.li key={index}>
                      <Text variant="autoEvent">{value}</Text>
                    </Styled.li>
                  )
                })}
              </Styled.ul>
            </ListContainer>
          )}
          {hasEvents && (
            <ListContainer name="Events">
              <Styled.ul>
                {events.map((value, index) => {
                  return (
                    <Styled.li key={index}>
                      <EventButton
                        active={active}
                        value={value}
                        enabled={canEvent}
                        onClick={onEvent}
                      />
                    </Styled.li>
                  )
                })}
              </Styled.ul>
            </ListContainer>
          )}
          {states && (
            <ListContainer name="States">
              <Flex
                pt={1}
                sx={{
                  flexDirection: states.length > 1 ? 'column' : 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                {states.map((value, index) => {
                  const childHasContent =
                    value.states ||
                    value.events.length > 0 ||
                    value.autoEvents.length > 0

                  return (
                    <Card
                      key={index}
                      active={value.active}
                      mr={childHasContent ? 5 : 2}
                      sx={{
                        width: '100%', //root ? "100%" : hasContent ? "fit-content" : "100%"
                      }}
                    >
                      <Node {...value} canEvent={canEvent} onEvent={onEvent} />
                    </Card>
                  )
                })}
              </Flex>
            </ListContainer>
          )}
          {states && <Text variant="caption">{name}</Text>}
        </Box>
      )}
    </Box>
  )
}

export default Node
