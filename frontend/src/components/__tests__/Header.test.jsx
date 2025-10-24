import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../Header' // update relative path if needed

describe('Header', () => {
  it('renders site title or logo text', () => {
    render(<Header />)
    expect(screen.getByText(/your site name|backend ok/i)).toBeDefined()
  })
})
