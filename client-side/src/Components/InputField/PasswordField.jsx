import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
} from '@chakra-ui/react'
import { Field } from 'formik'
import  { forwardRef, useRef } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

export const PasswordField = forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure()
    const internalRef = useRef(null)
    const mergedRef = ref || internalRef

    const onClickReveal = () => {
        onToggle()
        if (mergedRef.current) {
            mergedRef.current.focus({ preventScroll: true })
        }
    }

    return (
        <Field name='password'>
            {({ field, form }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <InputGroup>
                        <InputRightElement>
                            <IconButton
                                variant='text'
                                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                                onClick={onClickReveal}
                            />
                        </InputRightElement>
                        <Input
                            {...field}
                            id='password'
                            ref={mergedRef}
                            type={isOpen ? 'text' : 'password'}
                            placeholder='Enter password'
                            autoComplete='current-password'
                            {...props}
                        />
                    </InputGroup>
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
            )}
        </Field>
    )
})

PasswordField.displayName = 'PasswordField'
