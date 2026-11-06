// DEMO ARTIFACT — "without skill" — naive response to a bare prompt:
// "write tests for UploadZone" (no skill invoked, no conventions supplied)
//
// Talking points for the room:
// - assumes Jest + RTL are already configured (they aren't in this repo — this file would fail to run)
// - no test plan, straight to code
// - only covers the happy path render
// - no accessibility test at all
// - uses fireEvent instead of userEvent (less realistic interaction simulation)

import { render, screen, fireEvent } from '@testing-library/react';
import { UploadZone } from '@/components/upload/UploadZone';

describe('UploadZone', () => {
  it('renders upload prompt', () => {
    render(<UploadZone />);
    expect(screen.getByText('Upload your photos')).toBeInTheDocument();
  });

  it('shows a file after drop', () => {
    render(<UploadZone />);
    const file = new File(['hello'], 'photo.png', { type: 'image/png' });
    const input = screen.getByTestId('upload-input'); // does not exist on the component — guess/hallucination
    fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText('photo.png')).toBeInTheDocument();
  });
});
