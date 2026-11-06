// DEMO ARTIFACT — "with skill" — generated using the javascript-typescript-jest skill
// See TEST-PLAN.md in this folder for the plan this file implements.

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UploadZone } from '@/components/upload/UploadZone';

function makeFile(name: string, type: string) {
  return new File(['content'], name, { type });
}

describe('UploadZone', () => {
  it('renders the default upload prompt', () => {
    render(<UploadZone />);
    expect(screen.getByText('Upload your photos')).toBeInTheDocument();
    expect(
      screen.getByText(/Drag and drop your images here/i)
    ).toBeInTheDocument();
  });

  describe('drag state', () => {
    it('shows the active drop message while dragging a file over the zone', async () => {
      render(<UploadZone />);
      const dropRegion = screen.getByText('Upload your photos').closest('div')!.parentElement!;

      fireDragEnter(dropRegion);

      expect(await screen.findByText('Drop your images here!')).toBeInTheDocument();
    });
  });

  describe('file-type validation', () => {
    it('accepts a valid image file and notifies onUpload', async () => {
      const user = userEvent.setup();
      const onUpload = jest.fn();
      render(<UploadZone onUpload={onUpload} />);

      const input = getHiddenFileInput();
      const file = makeFile('photo.png', 'image/png');

      await user.upload(input, file);

      expect(await screen.findByText('photo.png')).toBeInTheDocument();
      expect(onUpload).toHaveBeenCalledWith([file]);
    });

    it('does not accept a non-image file', async () => {
      const user = userEvent.setup();
      const onUpload = jest.fn();
      render(<UploadZone onUpload={onUpload} />);

      const input = getHiddenFileInput();
      const file = makeFile('resume.pdf', 'application/pdf');

      await user.upload(input, file);

      expect(screen.queryByText('resume.pdf')).not.toBeInTheDocument();
      expect(onUpload).not.toHaveBeenCalled();
    });
  });

  describe('preview rendering', () => {
    it('removes a file from the grid when its remove button is clicked', async () => {
      const user = userEvent.setup();
      render(<UploadZone />);

      const input = getHiddenFileInput();
      const file = makeFile('photo.png', 'image/png');
      await user.upload(input, file);

      const removeButton = await screen.findByRole('button');
      await user.click(removeButton);

      await waitFor(() => {
        expect(screen.queryByText('photo.png')).not.toBeInTheDocument();
      });
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:preview');
    });
  });

  describe('accessibility', () => {
    it('is reachable by keyboard and opens the file picker on Enter', async () => {
      const user = userEvent.setup();
      render(<UploadZone />);

      const input = getHiddenFileInput();
      const clickSpy = jest.spyOn(input, 'click');

      await user.tab();
      await user.keyboard('{Enter}');

      expect(clickSpy).toHaveBeenCalled();
    });

    it('restricts the hidden input to image mime types for assistive tech', () => {
      render(<UploadZone />);
      const input = getHiddenFileInput();
      expect(input).toHaveAttribute('accept', expect.stringContaining('image/'));
    });
  });
});

function getHiddenFileInput(): HTMLInputElement {
  return document.querySelector('input[type="file"]') as HTMLInputElement;
}

function fireDragEnter(element: Element) {
  const event = new Event('dragenter', { bubbles: true });
  Object.defineProperty(event, 'dataTransfer', { value: { types: ['Files'], files: [] } });
  element.dispatchEvent(event);
}
